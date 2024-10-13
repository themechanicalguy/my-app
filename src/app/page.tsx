import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets?.map((snippet) => {
    return (
      <Link
        class="flex justify-between items-center p-2 border rounded"
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div class="flex m-2 justify-between items-center">
        <h1 class="text-xl font-bold"> Snippets</h1>
        <Link href="/snippets/new" class="border p-2 rounded">
          New
        </Link>
      </div>
      <div class="flex flex-col gap-2"> {renderedSnippets}</div>
    </div>
  );
}
