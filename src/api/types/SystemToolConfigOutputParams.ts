/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export type SystemToolConfigOutputParams =
    | ElevenLabs.SystemToolConfigOutputParams.EndCall
    | ElevenLabs.SystemToolConfigOutputParams.LanguageDetection
    | ElevenLabs.SystemToolConfigOutputParams.PlayKeypadTouchTone
    | ElevenLabs.SystemToolConfigOutputParams.SkipTurn
    | ElevenLabs.SystemToolConfigOutputParams.TransferToAgent
    | ElevenLabs.SystemToolConfigOutputParams.TransferToNumber;

export namespace SystemToolConfigOutputParams {
    export interface EndCall extends ElevenLabs.EndCallToolConfig {
        systemToolType: "end_call";
    }

    export interface LanguageDetection extends ElevenLabs.LanguageDetectionToolConfig {
        systemToolType: "language_detection";
    }

    export interface PlayKeypadTouchTone extends ElevenLabs.PlayDtmfToolConfig {
        systemToolType: "play_keypad_touch_tone";
    }

    export interface SkipTurn extends ElevenLabs.SkipTurnToolConfig {
        systemToolType: "skip_turn";
    }

    export interface TransferToAgent extends ElevenLabs.TransferToAgentToolConfig {
        systemToolType: "transfer_to_agent";
    }

    export interface TransferToNumber extends ElevenLabs.TransferToNumberToolConfigOutput {
        systemToolType: "transfer_to_number";
    }
}
