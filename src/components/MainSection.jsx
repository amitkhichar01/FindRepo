import { useState, useEffect } from "react";
import Input from "./Input";
import RepoList from "./RepoList";

function MainSection() {
    const [language, setLanguage] = useState("");
    const [numberOfRepo, setNumberOfRepo] = useState("");
    const [repoData, setRepoData] = useState(null);
    const GITHUB_TOKEN = "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";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = `https://api.github.com/search/repositories?q=language:${language.trim()}&per_page=${numberOfRepo.trim()}`;
            const options = {
                method: "GET",
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(url, options);
            const data = await response.json();

            setRepoData(data.items);
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    };

    useEffect(() => {
        const handleCopy = (event) => {
            const { cloneUrl, index } = event.target.dataset;
            const tempInput = document.createElement("input");
            tempInput.value = cloneUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            const copiedText = document.querySelector(`.show-copied-text${index}`);
            copiedText.textContent = " Copied";
            setTimeout(() => {
                copiedText.textContent = "";
            }, 3000);
        };

        document.querySelectorAll(".copyIcon").forEach((icon) => {
            icon.addEventListener("click", handleCopy);
            return () => icon.removeEventListener("click", handleCopy);
        });
    }, [repoData]);

    return (
        <>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-start mx-1 sm:mx-0">
                <div className="flex flex-col justify-start items-center gap-10">
                    <h2 className="text-lg text-center font-bold mt-5 md:text-2xl">Discover the Best Open Source GitHub Repositories</h2>
                    <form onSubmit={handleSubmit} className="text-center">
                        <Input type="text" name="language" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Only one language" />
                        <Input type="number" name="number of Repo" value={numberOfRepo} onChange={(e) => setNumberOfRepo(e.target.value)} placeholder="10" />
                        <button type="submit" className="self-center py-2 px-3 mb-10 rounded bg-blue-500 bold">
                            Find Repos
                        </button>
                    </form>
                </div>
            </div>
            {repoData && <RepoList repoData={repoData} />}
        </>
    );
}

export default MainSection;
