/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface BuiltInToolsInput {
    /** The end call tool */
    endCall?: ElevenLabs.SystemToolConfigInput;
    /** The language detection tool */
    languageDetection?: ElevenLabs.SystemToolConfigInput;
    /** The transfer to agent tool */
    transferToAgent?: ElevenLabs.SystemToolConfigInput;
    /** The transfer to number tool */
    transferToNumber?: ElevenLabs.SystemToolConfigInput;
    /** The skip turn tool */
    skipTurn?: ElevenLabs.SystemToolConfigInput;
    /** The play DTMF tool */
    playKeypadTouchTone?: ElevenLabs.SystemToolConfigInput;
}
