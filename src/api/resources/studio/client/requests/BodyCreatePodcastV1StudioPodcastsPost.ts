/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../../index";

/**
 * @example
 *     {
 *         modelId: "eleven_multilingual_v2",
 *         mode: {
 *             type: "conversation",
 *             conversation: {
 *                 hostVoiceId: "aw1NgEzBg83R7vgmiJt6",
 *                 guestVoiceId: "aw1NgEzBg83R7vgmiJt7"
 *             }
 *         },
 *         source: {
 *             text: "This is a test podcast."
 *         }
 *     }
 */
export interface BodyCreatePodcastV1StudioPodcastsPost {
    /** The ID of the model to be used for this Studio project, you can query GET /v1/models to list all available models. */
    modelId: string;
    /** The type of podcast to generate. Can be 'conversation', an interaction between two voices, or 'bulletin', a monologue. */
    mode: ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostMode;
    /** The source content for the Podcast. */
    source: ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostSource;
    /**
     * Output quality of the generated audio. Must be one of:
     * standard - standard output format, 128kbps with 44.1kHz sample rate.
     * high - high quality output format, 192kbps with 44.1kHz sample rate and major improvements on our side. Using this setting increases the credit cost by 20%.
     * ultra - ultra quality output format, 192kbps with 44.1kHz sample rate and highest improvements on our side. Using this setting increases the credit cost by 50%.
     * ultra lossless - ultra quality output format, 705.6kbps with 44.1kHz sample rate and highest improvements on our side in a fully lossless format. Using this setting increases the credit cost by 100%.
     */
    qualityPreset?: ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostQualityPreset;
    /**
     * Duration of the generated podcast. Must be one of:
     * short - produces podcasts shorter than 3 minutes.
     * default - produces podcasts roughly between 3-7 minutes.
     * long - produces podcasts longer than 7 minutes.
     */
    durationScale?: ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostDurationScale;
    /** An optional language of the Studio project. Two-letter language code (ISO 639-1). */
    language?: string;
    /** The intro text that will always be added to the beginning of the podcast. */
    intro?: string;
    /** The outro text that will always be added to the end of the podcast. */
    outro?: string;
    /** Additional instructions prompt for the podcast generation used to adjust the podcast's style and tone. */
    instructionsPrompt?: string;
    /** A brief summary or highlights of the Studio project's content, providing key points or themes. This should be between 10 and 70 characters. */
    highlights?: string[];
    /**
     *     A url that will be called by our service when the Studio project is converted. Request will contain a json blob containing the status of the conversion
     *     Messages:
     *     1. When project was converted successfully:
     *     {
     *       type: "project_conversion_status",
     *       event_timestamp: 1234567890,
     *       data: {
     *         request_id: "1234567890",
     *         project_id: "21m00Tcm4TlvDq8ikWAM",
     *         conversion_status: "success",
     *         project_snapshot_id: "22m00Tcm4TlvDq8ikMAT",
     *         error_details: None,
     *       }
     *     }
     *     2. When project conversion failed:
     *     {
     *       type: "project_conversion_status",
     *       event_timestamp: 1234567890,
     *       data: {
     *         request_id: "1234567890",
     *         project_id: "21m00Tcm4TlvDq8ikWAM",
     *         conversion_status: "error",
     *         project_snapshot_id: None,
     *         error_details: "Error details if conversion failed"
     *       }
     *     }
     *
     *     3. When chapter was converted successfully:
     *     {
     *       type: "chapter_conversion_status",
     *       event_timestamp: 1234567890,
     *       data: {
     *         request_id: "1234567890",
     *         project_id: "21m00Tcm4TlvDq8ikWAM",
     *         chapter_id: "22m00Tcm4TlvDq8ikMAT",
     *         conversion_status: "success",
     *         chapter_snapshot_id: "23m00Tcm4TlvDq8ikMAV",
     *         error_details: None,
     *       }
     *     }
     *     4. When chapter conversion failed:
     *     {
     *       type: "chapter_conversion_status",
     *       event_timestamp: 1234567890,
     *       data: {
     *         request_id: "1234567890",
     *         project_id: "21m00Tcm4TlvDq8ikWAM",
     *         chapter_id: "22m00Tcm4TlvDq8ikMAT",
     *         conversion_status: "error",
     *         chapter_snapshot_id: None,
     *         error_details: "Error details if conversion failed"
     *       }
     *     }
     *
     */
    callbackUrl?: string;
}
