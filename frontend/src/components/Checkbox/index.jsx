import { CheckboxInput, CheckboxLabel } from './styles';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </CheckboxLabel>
  )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default Checkbox;
