import { useRef, useState } from "react";
import { ArrowUpIcon, PaperclipIcon } from "../../../components/ui/icons";
import styles from "./PromptBox.module.css";

const SUGGESTIONS = [
  "Create a website",
  "Build a dashboard",
  "Create an AI app",
];

export default function PromptBox() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function applySuggestion(text: string) {
    setValue(text);
    textareaRef.current?.focus();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          placeholder="Describe the app you want to build..."
          aria-label="Describe the app you want to build"
          rows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className={styles.actions}>
          <button type="button" className={styles.attach}>
            <PaperclipIcon />
            Attach
          </button>

          <button
            type="button"
            className={styles.send}
            aria-label="Send message"
            disabled={!value.trim()}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>

      <ul className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => (
          <li key={suggestion}>
            <button
              type="button"
              className={styles.chip}
              onClick={() => applySuggestion(suggestion)}
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
