/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import { McpServerResponseModel } from "./McpServerResponseModel";

export const McpServersResponseModel: core.serialization.ObjectSchema<
    serializers.McpServersResponseModel.Raw,
    ElevenLabs.McpServersResponseModel
> = core.serialization.object({
    mcpServers: core.serialization.property("mcp_servers", core.serialization.list(McpServerResponseModel)),
});

export declare namespace McpServersResponseModel {
    export interface Raw {
        mcp_servers: McpServerResponseModel.Raw[];
    }
}
