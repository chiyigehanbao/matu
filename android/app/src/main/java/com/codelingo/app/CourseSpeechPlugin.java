package com.codelingo.app;

import android.speech.tts.TextToSpeech;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Locale;

@CapacitorPlugin(name = "CourseSpeech")
public class CourseSpeechPlugin extends Plugin {
    private TextToSpeech engine;
    private boolean ready;
    private boolean failed;
    private PluginCall pending;

    @Override
    public void load() {
        getActivity().runOnUiThread(() -> engine = new TextToSpeech(getContext(), status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (ready) {
                int language = engine.setLanguage(Locale.US);
                ready = language != TextToSpeech.LANG_MISSING_DATA && language != TextToSpeech.LANG_NOT_SUPPORTED;
                if (ready) engine.setSpeechRate(0.85f);
            }
            failed = !ready;
            if (pending != null) {
                PluginCall call = pending;
                pending = null;
                speakWhenReady(call);
            }
        }));
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "").trim();
        if (text.isEmpty() || text.length() > 200) {
            call.reject("Invalid text");
            return;
        }
        getActivity().runOnUiThread(() -> {
            if (!ready && !failed) {
                if (pending != null) pending.reject("Superseded");
                pending = call;
            } else {
                speakWhenReady(call);
            }
        });
    }

    private void speakWhenReady(PluginCall call) {
        if (!ready || engine == null) {
            call.reject("English speech unavailable");
            return;
        }
        int result = engine.speak(call.getString("text"), TextToSpeech.QUEUE_FLUSH, null, "course-word");
        if (result == TextToSpeech.ERROR) call.reject("Speech failed");
        else call.resolve();
    }

    @Override
    protected void handleOnDestroy() {
        if (pending != null) { pending.reject("Activity closed"); pending = null; }
        if (engine != null) { engine.stop(); engine.shutdown(); engine = null; }
        super.handleOnDestroy();
    }
}
