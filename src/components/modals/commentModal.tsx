"use client";
import React, { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  initialComment: string;
  onClose: () => void;
  onSave: (comment: string) => void;
};

const CommentModal = ({ isOpen, initialComment, onClose, onSave }: Props) => {
  const [comment, setComment] = useState(initialComment || "");

  useEffect(() => {
    if (isOpen) setComment(initialComment || "");
  }, [initialComment, isOpen]);

  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 0) {
      const capitalized =
        value.charAt(0).toUpperCase() + value.slice(1);
      setComment(capitalized);
    } else {
      setComment("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="fixed inset-0 flex items-center justify-center z-50 text-[#1D2B48]"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Add comment</h2>
        <textarea
          className="w-full text-sm h-32 border border-gray-300 p-2 rounded mb-1"
          value={comment}
          onChange={handleChange}
        />
        <p className="text-xs text-gray-500 text-end mb-1">
          {comment.trim().length}/10 characters minimum
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 bg-gray-300 rounded cursor-pointer text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-3 py-1 rounded cursor-pointer text-sm ${comment.trim().length < 10
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#1D2B48] text-white"
              }`}
            onClick={() => {
              onSave(comment);
              onClose();
            }}
            disabled={comment.trim().length < 10}
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default CommentModal;
