import PropTypes from "prop-types";

export const PortraitModeOnly = props => {
    return (
        <>
            <div className={"portrait-mode"}>{props.children}
            </div>
            <div className={"landscape-mode"}>
                This is awkward 😬It looks better in portrait mode!
            </div>
        </>
    );
};

PortraitModeOnly.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired
}