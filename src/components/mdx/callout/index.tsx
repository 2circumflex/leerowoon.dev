import { PropsWithChildren, ReactElement } from "react";

import * as Icon from "./icons";
import { cn } from "@/lib/utils";

type CalloutType = "normal" | "info" | "warn" | "danger";

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface CalloutObjByType {
  [key: string]: {
    icon: () => ReactElement;
    className: string;
  };
}

const calloutObj: CalloutObjByType = {
  normal: {
    icon: Icon.Normal,
    className:
      "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50",
  },
  info: {
    icon: Icon.Info,
    className:
      "text-gray-700 dark:text-gray-300 bg-blue-100 dark:bg-blue-900/50",
  },
  warn: {
    icon: Icon.Warn,
    className:
      "text-gray-700 dark:text-gray-300 bg-yellow-100 dark:bg-yellow-900/50",
  },
  danger: {
    icon: Icon.Danger,
    className: "text-gray-700 dark:text-gray-300 bg-red-100 dark:bg-red-900/50",
  },
};

export const Callout = (props: CalloutProps) => {
  const type = props.type || "normal";
  const { icon: Icon, className } = calloutObj[type];

  return (
    <div
      className={cn(
        "my-6 flex items-center gap-3 rounded-md px-5 py-4",
        className
      )}
    >
      {type !== "normal" && (
        <div>
          <Icon />
        </div>
      )}
      <div className="callout-contents flex-1">
        {props.title && (
          <span style={{ fontWeight: "bold" }}>{props.title}</span>
        )}
        {props.children}
      </div>
    </div>
  );
};
