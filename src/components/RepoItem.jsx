import { RepoItemPropTypes } from "../../propTypes.js";
import Btn from "./Btn";

function RepoItem({ item, index }) {
    return (
        <div className="repo-item mb-5 p-2 rounded bg-zinc-800 text-white sm:mb-5 sm:p-3">
            <div key={index} className="mb-5 p-2 rounded bg-zinc-800 text-white sm:mb-5 sm:p-3">
                <div className="flex flex-row justify-start gap-3 items-center">
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                        <img className="w-12 rounded-full" src={item.owner.avatar_url} alt="Avatar" />
                    </a>

                    <div>
                        <a href={item.html_url} target="_blank" rel="noreferrer">
                            <p>{item.full_name}</p>
                            <p className="text-sm mt-1">{new Date(item.created_at).getFullYear()}</p>
                        </a>
                    </div>
                </div>
                <div className="mx-3">
                    <div className="flex flex-row justify-start py-3 flex-wrap gap-1 md:justify-evenly">
                        <p>
                            <i className="pr-1 text-gray-200 fa-regular fa-star"></i> {item.stargazers_count.toLocaleString("en-US")} <span className="text-gray-500 mr-1 sm:mr-0">Stars</span>
                        </p>

                        <p>
                            <i className="pr-1 text-gray-200 fa-solid fa-code-fork"></i> {item.forks.toLocaleString("en-US")} <span className="text-gray-500">Forks</span>
                        </p>

                        <p>
                            <i className="pr-1 text-gray-200 fa-solid fa-circle-exclamation"></i> {item.open_issues.toLocaleString("en-US")} <span className="text-gray-500">Open issues</span>
                        </p>
                    </div>

                    <p className="py-3 text-wrap overflow-auto">
                        <i className="fa-solid fa-comment"></i> {item.description}
                    </p>

                    <div className="my-3 rounded bg-zinc-900">
                        <div className="flex flex-row justify-between relative rounded bg-black px-3 py-1">
                            <p className="text-gray-400">Clone Repo</p>

                            <p className="absolute top-0 right-0 py-1 px-4">
                                <i className="copyIcon  fa-regular fa-clipboard cursor-pointer" data-clone-url={`git clone ${item.clone_url}`} data-index={index}></i>
                                <span className={`show-copied-text${index}`}></span>
                            </p>
                        </div>
                        <p className="clone-url p-3 overflow-auto">git clone {item.clone_url}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-center pt-6 pb-2 md:flex-row md:">
                        {item.homepage && <Btn name="Website" href={item.homepage} bgColor="bg-blue-500" />}
                        <Btn name="Github" href={item.html_url} bgColor="bg-gray-700" />
                        <Btn name="See Issues" href={`${item.html_url}/issues`} bgColor="bg-red-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

RepoItem.propTypes = RepoItemPropTypes;

export default RepoItem;
