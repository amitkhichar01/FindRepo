import PropTypes from "prop-types";


export const RepoListPropTypes = {
    repoData: PropTypes.array.isRequired,
};

export const RepoItemPropTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export const InputPropTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const BtnPropTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};