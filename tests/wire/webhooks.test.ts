/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { ElevenLabsClient } from "../../src/Client";

describe("Webhooks", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new ElevenLabsClient({
            apiKey: "test",
            environment: { base: server.baseUrl, wss: server.baseUrl },
        });

        const rawResponseBody = {
            webhooks: [
                {
                    name: "My Webhook",
                    webhook_id: "123",
                    webhook_url: "https://elevenlabs.io/example-callback-url",
                    is_disabled: false,
                    is_auto_disabled: false,
                    created_at_unix: 123456789,
                    auth_type: "hmac",
                    usage: [{ usage_type: "ConvAI Settings" }],
                    most_recent_failure_error_code: 404,
                    most_recent_failure_timestamp: 123456799,
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/v1/workspace/webhooks")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.webhooks.list({
            includeUsages: false,
        });
        expect(response).toEqual({
            webhooks: [
                {
                    name: "My Webhook",
                    webhookId: "123",
                    webhookUrl: "https://elevenlabs.io/example-callback-url",
                    isDisabled: false,
                    isAutoDisabled: false,
                    createdAtUnix: 123456789,
                    authType: "hmac",
                    usage: [
                        {
                            usageType: "ConvAI Settings",
                        },
                    ],
                    mostRecentFailureErrorCode: 404,
                    mostRecentFailureTimestamp: 123456799,
                },
            ],
        });
    });
});
