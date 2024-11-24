import { PropsWithChildren } from "react";

import * as Icon from "./icons";
import { cn } from "@/lib/utils";

type CalloutType = "normal" | "info" | "warn" | "danger";

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface CalloutObjByType {
  [key: string]: {
    icon: () => JSX.Element;
    className: string;
  };
}

const calloutObj: CalloutObjByType = {
  normal: {
    icon: Icon.Normal,
    className: "text-secondary-foreground bg-secondary",
  },
  info: {
    icon: Icon.Info,
    className: "text-informative-foreground bg-informative",
  },
  warn: {
    icon: Icon.Warn,
    className: "text-warning-foreground bg-warning",
  },
  danger: {
    icon: Icon.Danger,
    className: "text-destructive-foreground bg-destructive",
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
