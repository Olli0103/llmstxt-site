import { Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="p-10 pb-10 bg-zinc-100">
            <h1 className="mb-5 text-4xl font-bold">llms.txt directory</h1>
            <p className="mb-5 text-lg">
                A list if all the llms.txt based files location with some stats.
            </p>
            <p className="text-sm mb-2">
                Contribute to the repository below to add more locations.
            </p>
            <p className="mb-5 text-md">
                <Button variant="outline" asChild>
                    <a
                        href="https://github.com/krish-adi/llmstxt-site"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-4 h-4" /> GitHub Repository{" "}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </Button>
            </p>
        </div>
    );
}
