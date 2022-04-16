import React from "react";

function EmotionItem({
  emotion_id,
  emotion_img,
  emotion_description,
  onClick,
  isSelected,
}) {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img alt={"감정"} src={emotion_img} />
      <span>{emotion_description}</span>
    </div>
  );
}

export default React.memo(EmotionItem);
