"use client";

import { useEdgeRuntime } from "@aichat-ui/react";
import { Thread } from "@aichat-ui/react";
import { makeMarkdownText } from "@aichat-ui/react-markdown";

const MarkdownText = makeMarkdownText();

export function Aichat() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <Thread
      runtime={runtime}
      assistantMessage={{ components: { Text: MarkdownText } }}
    />
  );
}
