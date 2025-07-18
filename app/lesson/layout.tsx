import type { PropsWithChildren } from "react";

const LessonLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full flex-col overflow-visible">
      <div className="flex h-full w-full flex-col overflow-visible">{children}</div>
    </div>
  );
};

export default LessonLayout;
