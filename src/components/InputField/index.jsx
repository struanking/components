import React, { Component, PropTypes } from 'react';
require('./styles.css');

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      formattedValue: props.formatter(props.value),
      rawValue: props.value,
    };

    this.onChange = this.onChange.bind(this);
    this.formatter = props.formatter.bind(this);
  }

  onFocus() {
    this.setState({
      isEditing: true,
    });
  }

  onBlur() {
    this.setState({
      isEditing: false,
    });
  }

  onChange(e) {
    this.setState({
      formattedValue: this.formatter(e.target.value),
      rawValue: e.target.value,
    });
  }

  render() {
    const { id, label, showOnEdit, style } = this.props;
    const { isEditing, formattedValue, rawValue } = this.state;
    return (
      <div className={style}>
        <label htmlFor={id}>{label}</label>
        <span style={showOnEdit && !isEditing ? { opacity: 0 } : {} }>{formattedValue}</span>
        <input
          type="text"
          id={id}
          value={isEditing ? rawValue : formattedValue}
          onBlur={this.onBlur.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  formatter: (n) => n,
  label: '',
  labelVisible: true,
  mask: true,
  showOnEdit: false,
  style: 'vanilla',
  type: 'text',
  value: 0,
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  formatter: PropTypes.func,
  label: PropTypes.string.isRequired,
  labelVisible: PropTypes.bool.isRequired,
  mask: PropTypes.bool.isRequired,
  showOnEdit: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputField;
