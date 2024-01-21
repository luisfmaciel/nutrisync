import { SpinnerContainner } from "./styles";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const SpinnerDefault = ({ loading = false }) => {
    return (
        <>
            {loading && (
                <SpinnerContainner>
                    <Spinner as="span" animation="border" />
                </SpinnerContainner>
            )}
        </>
    );
};

SpinnerDefault.propTypes = {
  loading: PropTypes.bool
}

export default SpinnerDefault;
