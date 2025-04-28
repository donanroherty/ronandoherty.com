import React from "react"
import Link from "next/link"
import NextImage, { ImageProps } from "next/image"
import { createHighlighter } from "shiki"
import { ReactElement } from 'react';

const highlighter = createHighlighter({
  themes: ['github-dark'],
  langs: ['javascript', 'typescript', 'go', 'bash', 'sh', 'diff', 'json', 'markdown', 'md'],
})

function CustomLink(
  props: React.ComponentProps<'a'>) {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href || ""} {...props} />
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Image(props: ImageProps) {
  return <NextImage className="rounded-md" {...props} />
}

type YouTubeProps = {
  videoID: string
  title?: string
  frameBorder?: string
  width?: string
  aspectRatio?: string
}
function YouTube(props: YouTubeProps) {
  const { videoID, title, frameBorder, width, aspectRatio } = props

  return (
    <iframe
      width={width ?? "100%"}
      src={`https://www.youtube.com/embed/${videoID}?rel=0&amp;showinfo=0`}
      title={title ?? "YouTube video player"}
      frameBorder={frameBorder ?? "0"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ aspectRatio: aspectRatio ?? "16/9" }}
    ></iframe>
  )
}

type CodeElementProps = {
  children: string;
  className?: string;
};

type PreBlockProps = {
  children: ReactElement<CodeElementProps>;
};

async function PreBlock(props: PreBlockProps) {
  const { children } = props;

  if (!children || typeof children !== 'object' || !('props' in children)) {
    console.warn("PreBlock component received unexpected children:", children);
    return <pre>{children}</pre>;
  }

  const codeProps = children.props;
  const codeString = codeProps.children;
  const className = codeProps.className || '';
  const match = className.match(/language-(\w+)/);
  const lang = match ? match[1] : 'plaintext';

  if (typeof codeString !== 'string') {
    console.error("Code content inside <pre><code> is not a string:", codeString);
    return <pre>{children}</pre>;
  }

  try {
    const highlightedHtml = (await highlighter).codeToHtml(
      codeString.trimEnd(),
      {
        lang: lang,
        theme: 'github-dark',
      }
    );

    return <div className="text-lg" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />;
  } catch (error) {
    console.error(`Error highlighting code block (lang: ${lang}):`, error);
    return (
      <pre className={`${className} text-lg`}>
        <code>{codeString}</code>
      </pre>
    );
  }
}


function BoidsElement(props: any) {
  // @ts-ignore
  React.useEffect(() => import("../web-components/boids-element.mjs"), [])
  // @ts-ignore
  return <boids-element {...props} />
}

export default {
  a: CustomLink,
  // code: Code,
  pre: PreBlock,
  Image,
  YouTube,
  "boids-element": BoidsElement,
}

