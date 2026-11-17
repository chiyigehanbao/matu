import { checkAnswer } from './course.mjs';
import { guidance } from './course-guidance.mjs';
import { annotatedPython } from './course-annotations.mjs';
import { tracks, findTrack, findLesson, trackProgress, trackNext, allLessons, recommendTrack, chapterStarts } from './course-tracks.mjs';
const app = document.querySelector('#app');
const key = 'matu-course-v1';
let state = {done: [], last: null};
try {
  const saved = JSON.parse(localStorage.getItem(key));
  if (saved && Array.isArray(saved.done)) state = {done: saved.done.filter(x => typeof x === 'string'), last: saved.last};
} catch {}
let current = 'home', activeTrack = 'python', selected = null, answerState = null, speechSequence = 0;
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const spokenIdentifier = word => word.replace(/_+/g,' ').replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/([A-Z])([A-Z][a-z])/g,'$1 $2').trim();
const speakable = text => String(text).split(/([A-Za-z][A-Za-z0-9_]*)/g).map(part => /^[A-Za-z][A-Za-z0-9_]*$/.test(part) ? `<button type="button" class="speak-word" data-speak="${escape(part)}" aria-label="朗读 ${escape(part)}">${escape(part)}</button>` : escape(part)).join('');
const renderCode = lesson => annotatedPython(lesson).split('\n').map(line => (line.trimStart().startsWith('#') || line.trimStart().startsWith('//') || line.trimStart().startsWith('<!--') || line.trimStart().startsWith('/*') || line.trimStart().startsWith('--')) ? `<span class="code-comment">${speakable(line)}</span>` : speakable(line)).join('\n');
const searchIndex = new Map(allLessons.map(l=>[l.id,[l.title,l.subtitle,l.explain,l.vocab,l.request,l.output,l.explanation,...(l.guide||guidance[l.id]||[]),findTrack(l.trackId).name,...(l.blocks || [l]).map(block=>annotatedPython({...block,id:l.id}))].join('\n').toLocaleLowerCase()]));
const save = () => { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} };
const row = (l, i) => `<button class="lesson-row" data-lesson="${escape(l.id)}"><span class="lesson-number">${state.done.includes(l.id)?'✓':String(i+1).padStart(2,'0')}</span><span><strong>${escape(l.title)}</strong><small>${escape(l.subtitle)}</small></span><span class="arrow">›</span></button>`;
function trackCard(track) {
  const p=trackProgress(track,state.done);
  return `<div class="track"><div class="track-top"><span class="track-icon">${escape(track.icon)}</span><div><h3>${escape(track.name)}</h3><p>${escape(track.description)}</p></div></div><div class="bar"><span style="width:${p.done/p.total*100}%"></span></div><div class="track-foot"><span>已完成 ${p.done} / ${p.total} 课</span><button class="text-button" data-track="${track.id}">查看课程 →</button></div></div>`;
}
function home() {
  const last=findLesson(state.last);
  let track=findTrack(last?.trackId)||tracks[0];
  if(trackProgress(track,state.done).done===track.lessons.length)track=recommendTrack(track,state.done);
  const next=(last && last.trackId===track.id && !state.done.includes(last.id)) ? last : trackNext(track,state.done);
  const index=track.lessons.findIndex(l=>l.id===next.id);
  return `<section class="hero"><div class="eyebrow">LEARN TO CODE · 从这里出发</div><h1>每天一点，<br><span class="hero-accent">学会读懂代码。</span></h1><p>不用着急。从一个概念、一段代码开始，慢慢把编程变成你会用的工具。</p></section><section class="feature"><small>${state.last||state.done.length?'继续你的学习':'准备好开始了吗'} · ${escape(track.short)}</small><h2>${escape(next.title)}</h2><p>第 ${index+1} 课 · ${escape(next.subtitle)}</p><button class="button" data-lesson="${escape(next.id)}">${state.last||state.done.length?'继续学习':'开始第一课'} →</button></section><div class="section-head"><h2>你的学习路线</h2><span>按顺序逐步深入</span></div><div class="track-list">${trackCard(track)}</div><p><button class="text-button" data-nav="catalog">探索其他课程 →</button></p>`;
}
function catalog() {
  const groups=[{name:'Python 与后端',ids:['python','sql','fastapi']},{name:'网页与小程序',ids:['web','javascript','typescript','node','react','vue','wechat']},{name:'Java、Kotlin 与安卓',ids:['java','spring','kotlin','android']}];
  return `<div class="eyebrow">你的学习路线</div><h1 class="lesson-title">课程路线</h1><p class="lesson-subtitle">从基础开始，也可以选择你需要的方向。</p><label class="search-label" for="courseSearch">搜索课程</label><input id="courseSearch" class="course-search" type="search" autocomplete="off" placeholder="例如：变量、接口、React"><div id="courseSearchResults" class="search-results" hidden></div><div id="courseGroups">${groups.map(g=>`<div class="section-head"><h2>${g.name}</h2><span>${g.ids.length} 条路线</span></div><div class="track-list">${g.ids.map(id=>findTrack(id)).filter(Boolean).map(trackCard).join('')}</div>`).join('')}</div>`;
}
function trackView(track) {
  const p=trackProgress(track,state.done);
  const rows=track.lessons.map((l,i)=>{const chapter=chapterStarts[track.id]?.[l.id];return (chapter?`<h2 class="chapter-heading">${escape(chapter)}</h2>`:'')+row(l,i)}).join('');
  return `<button class="crumb" data-nav="catalog">← 返回全部路线</button><div class="eyebrow">学习路线 · ${escape(track.short)}</div><h1 class="lesson-title">${escape(track.name)}</h1><p class="lesson-subtitle">${escape(track.description)}</p><div class="track"><div class="track-foot"><strong>学习进度</strong><span>${p.done} / ${p.total} 课</span></div><div class="bar"><span style="width:${p.done/p.total*100}%"></span></div><button class="text-button" data-lesson="${escape(trackNext(track,state.done).id)}">${p.done===p.total?'回顾最后一课':p.done?'继续学习':'开始学习'} →</button></div><div class="section-head"><h2>课程目录</h2><span>${p.total} 课</span></div><div class="lesson-list">${rows}</div>`;
}
function lesson(l) {
  const track=findTrack(l.trackId), guide=l.guide||guidance[l.id], isApi=!!l.request;
  const shownOutput=l.id==='input'?'你叫什么？小明\n你好，小明':l.output;
  return `<button class="crumb" data-track="${track.id}">← 返回${escape(track.short)}课程</button><div class="eyebrow">${escape(track.short)} · 第 ${l.trackIndex+1} / ${track.lessons.length} 课${l.advanced?' · 进阶':''}</div><h1 class="lesson-title">${escape(l.title)}</h1><p class="lesson-subtitle">${escape(l.subtitle)}</p><section class="reading"><h2>先理解</h2><p>${escape(l.explain)}</p></section><div class="code-card"><p class="speech-status" role="status" aria-live="polite" hidden></p>${(l.blocks || [l]).map(block=>`<div class="code-head"><span>${escape(block.label || ("示例代码 · " + (l.language || "Python")))}</span><span class="code-tools"><span>点击英文听发音</span><button type="button" class="code-wrap" data-code-wrap aria-pressed="false">横向滚动</button></span></div><pre><code>${renderCode({...block,id:l.id})}</code></pre>`).join('')}${isApi?`<div class="code-head"><span>示例请求</span></div><div class="output">${escape(l.request)}</div>`:''}<div class="code-head"><span>${escape(l.outputLabel || (isApi?'示例响应':'运行结果'))}${l.id==='input'?' · 假设输入小明':''}</span></div><div class="output">${escape(shownOutput)}</div></div>${l.notice?`<p class="note">${escape(l.notice)}</p>`:isApi?'<p class="note">这是独立的教学示例和对应响应，阅读页面不会启动服务或发送请求。</p>':''}<section class="reading breakdown"><h2>逐步看懂</h2><ol>${guide.slice(0,2).map(x=>`<li>${escape(x)}</li>`).join('')}</ol></section><div class="vocab"><strong>课堂词汇</strong><br>${speakable(l.vocab)}</div><section class="quiz"><div class="eyebrow">可选练习</div><h2>想一想</h2><p>${escape(l.question)}</p>${l.options.map((o,i)=>`<button class="option ${selected===i?'selected':''}" data-answer="${i}">${escape(o)}</button>`).join('')}${answerState?`<div class="feedback ${answerState.correct?'good':''}" role="status">${escape(answerState.explanation)}</div>`:''}</section><div class="lesson-nav"><button class="button secondary" data-previous ${l.trackIndex===0?'disabled':''}>← 上一课</button><button class="button dark" data-complete>${l.trackIndex===track.lessons.length-1?'完成本课':'完成并继续 →'}</button></div><p class="note">看懂后就可以继续，练习可以跳过。进度保存在这台设备上。</p>`;
}
function progress() {
 const done=allLessons.filter(l=>state.done.includes(l.id));
 return `<div class="eyebrow">一步一步来</div><h1 class="lesson-title">学习进度</h1><p class="lesson-subtitle">每完成一课，都会记录在这里。</p><div class="track-list">${tracks.map(trackCard).join('')}</div><div class="section-head"><h2>已完成 ${done.length} 课</h2></div><div class="lesson-list">${done.map(l=>row(l,l.trackIndex)).join('')||'<div class="empty">还没有完成的课程。先去学习第一课吧。</div>'}</div>`;
}
function render(view,id) {
 current=view;
 document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===view||(['lesson','track'].includes(view)&&b.dataset.nav==='catalog')));
 const l=findLesson(id),track=findTrack(id);
 app.innerHTML=view==='home'?home():view==='catalog'?catalog():view==='progress'?progress():view==='track'&&track?trackView(track):view==='lesson'&&l?lesson(l):home();
 window.scrollTo(0,0);
}
function openLesson(id) {
 const l=findLesson(id); if(!l)return;
 state.last=id; activeTrack=l.trackId; save(); selected=null; answerState=null; render('lesson',id);
}
document.addEventListener('input',e=>{
 if(e.target.id!=='courseSearch')return;
 const query=e.target.value.trim().toLocaleLowerCase();
 const results=document.querySelector('#courseSearchResults'),groups=document.querySelector('#courseGroups');
 results.hidden=!query;groups.hidden=!!query;
 if(!query){results.innerHTML='';return}
 const found=allLessons.filter(l=>searchIndex.get(l.id).includes(query));
 results.innerHTML=`<div class="section-head"><h2>搜索结果</h2><span>${found.length} 课</span></div><div class="lesson-list">${found.length?found.map(l=>`<div class="search-hit"><small>${escape(findTrack(l.trackId).short)}</small>${row(l,l.trackIndex)}</div>`).join(''):'<div class="empty">没有找到相关课程，试试其他词。</div>'}</div>`;
});
document.addEventListener('click',e=>{
 const b=e.target.closest('button'); if(!b)return;
 if(b.hasAttribute('data-code-wrap')){
  const pre=b.closest('.code-head').nextElementSibling; const nowrap=pre.classList.toggle('no-wrap');
  b.setAttribute('aria-pressed',String(nowrap)); b.textContent=nowrap?'自动换行':'横向滚动'; return;
 }
 if(b.dataset.speak){
  const status=app.querySelector('.speech-status'), synth=window.speechSynthesis, Utterance=window.SpeechSynthesisUtterance;
  const sequence=++speechSequence;
  if(status)status.hidden=false;
  const native=window.Capacitor?.isNativePlatform?.() && window.Capacitor?.Plugins?.CourseSpeech;
  if(native?.speak){
   if(status)status.textContent='朗读：'+b.dataset.speak;
   Promise.resolve().then(()=>native.speak({text:spokenIdentifier(b.dataset.speak)})).then(()=>{
    setTimeout(()=>{if(status && sequence===speechSequence)status.hidden=true},1800);
   }).catch(()=>{if(status && sequence===speechSequence)status.textContent='朗读失败，请检查设备的英文语音设置。'});
   return;
  }
  if(!synth || !Utterance){if(status)status.textContent='当前设备无法使用语音朗读，请检查系统语音设置。';return}
  try { synth.cancel(); const utterance=new Utterance(spokenIdentifier(b.dataset.speak)); utterance.lang='en-US'; utterance.rate=0.85; utterance.onend=()=>{if(status && sequence===speechSequence)status.hidden=true}; utterance.onerror=(event)=>{if(status && sequence===speechSequence && event.error!=='interrupted' && event.error!=='canceled')status.textContent='朗读失败，请检查设备的英文语音设置。'}; synth.speak(utterance); if(status)status.textContent='朗读：'+b.dataset.speak; } catch {if(status)status.textContent='朗读失败，请检查设备的英文语音设置。'} return;
 }
 if(b.dataset.nav){render(b.dataset.nav);return}
 if(b.dataset.track){activeTrack=b.dataset.track;render('track',activeTrack);return}
 if(b.dataset.lesson){openLesson(b.dataset.lesson);return}
 const l=findLesson(state.last); if(!l)return;
 if(b.dataset.answer!==undefined){
  selected=Number(b.dataset.answer);answerState=checkAnswer(l,selected);
  const quiz=app.querySelector('.quiz');quiz.querySelectorAll('.option').forEach((x,i)=>x.classList.toggle('selected',i===selected));
  let f=quiz.querySelector('.feedback');if(!f){f=document.createElement('div');f.setAttribute('role','status');quiz.append(f)}
  f.className='feedback'+(answerState.correct?' good':'');f.textContent=answerState.correct?'答对了 · '+answerState.explanation:'再想想 · 可以再看看上面的讲解和代码。';return;
 }
 const track=findTrack(l.trackId);
 if(b.hasAttribute('data-previous')){if(l.trackIndex>0)openLesson(track.lessons[l.trackIndex-1].id);return}
 if(b.hasAttribute('data-complete')){if(!state.done.includes(l.id))state.done.push(l.id);save();if(l.trackIndex<track.lessons.length-1)openLesson(track.lessons[l.trackIndex+1].id);else render('track',track.id);}
});
window.addEventListener('codelingo:back',event=>{
 if(current==='home')return;
 event.preventDefault();
 if(current==='lesson')render('track',activeTrack);else if(current==='track')render('catalog');else render('home');
});
render('home');
