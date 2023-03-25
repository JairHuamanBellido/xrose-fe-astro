import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";
import Link from "../Link/Link";

interface Props {
  htmlBody: Document;
}

export default function RichText({ htmlBody }: Props) {
  return (
    <>
      {documentToReactComponents(htmlBody, {
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => {
            return <Link href={node.data.uri}> {children} </Link>;
          },
        },
      })}
    </>
  );
}
