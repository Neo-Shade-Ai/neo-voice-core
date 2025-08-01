/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ElevenLabs from "../../api/index";
import * as core from "../../core";

export const AgentCallLimits: core.serialization.ObjectSchema<
    serializers.AgentCallLimits.Raw,
    ElevenLabs.AgentCallLimits
> = core.serialization.object({
    agentConcurrencyLimit: core.serialization.property(
        "agent_concurrency_limit",
        core.serialization.number().optional(),
    ),
    dailyLimit: core.serialization.property("daily_limit", core.serialization.number().optional()),
    burstingEnabled: core.serialization.property("bursting_enabled", core.serialization.boolean().optional()),
});

export declare namespace AgentCallLimits {
    export interface Raw {
        agent_concurrency_limit?: number | null;
        daily_limit?: number | null;
        bursting_enabled?: boolean | null;
    }
}
