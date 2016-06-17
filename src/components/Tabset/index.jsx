import React, { Component, PropTypes } from 'react';
require('./styles.css');

const TabsetPropTypes = {
  activeTab: PropTypes.number,
  children: PropTypes.array,
};

const TabPropTypes = {
  callback: PropTypes.function,
  extraStyles: PropTypes.object,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const TabPanelPropTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

class Tabset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab || 0, // use defaultProps
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(i) {
    this.setState({
      activeTab: i,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="tabset">
        <ul className="tabs">
        {children.map((child, index) => {
          const isSelected = index === this.state.activeTab;
          return (
            <Tab { ...child.props }
              callback={() => this.setActiveTab(index)}
              extraStyles={isSelected ? 'is-selected' : null}
              isSelected={isSelected}
              key={child.props.id}
            />
          );
        })}
        </ul>
        {children.filter((child, index) => index === this.state.activeTab)}
      </div>
    );
  }
}

export const Tab = ({ callback, id, isSelected, title, extraStyles }) => (
  <li className={`tab ${extraStyles}`}>
    <a href={`#${id}`} id={`tab-${id}`} onClick={callback} aria-selected={isSelected}>{title}</a>
  </li>
);

export const TabPanel = ({ children, id }) => (
  <div
    id={id}
    aria-labelledby={`tab-${id}`}
    className="tab-panel"
    tabIndex="-1"
  >
    {children}
  </div>
);

Tabset.propTypes = TabsetPropTypes;
TabPanel.propTypes = TabPanelPropTypes;
Tab.propTypes = TabPropTypes;

export default Tabset;
