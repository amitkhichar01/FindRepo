import RepoItem from "./RepoItem";
import { RepoListPropTypes } from "../../propTypes.js";


function RepoList({ repoData }) {
    return (
        <div className="repo-list">
            <div className="grid grid-cols-1 p-1 bg-black sm:grid-cols-2 sm:gap-x-3 sm:p-2">
                {repoData.map((item, index) => (
                    <RepoItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

RepoList.propTypes = RepoListPropTypes;

export default RepoList;
