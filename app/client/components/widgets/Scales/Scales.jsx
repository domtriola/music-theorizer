import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import KEYS from '../../../constants/keys';
import SCALES from '../../../constants/scales';
import MODES from '../../../constants/modes';

import { updateScale } from '../../../actions/scale';

import Select from '../../ui/forms/Select/Select';
import Scale from '../../ui/Scale/Scale';

const mapStateToProps = ({ scale }) => ({
  musicalKey: scale.get('key'),
  scale: scale.get('scale'),
  notes: scale.get('notes'),
});

const mapDispatchToProps = dispatch => ({
  updateScale: (key, scale) => dispatch(updateScale(key, scale)),
});

const { string, arrayOf, func } = PropTypes;
const propTypes = {
  musicalKey: string.isRequired,
  scale: string.isRequired,
  notes: arrayOf(string).isRequired,
  updateScale: func.isRequired,
};

class Scales extends React.Component {
  constructor(props) {
    super(props);

    this.updateKey = this.updateKey.bind(this);
    this.updateScale = this.updateScale.bind(this);
  }

  updateKey(key) {
    this.props.updateScale(key, this.props.scale);
  }

  updateScale(scale) {
    this.props.updateScale(this.props.musicalKey, scale);
  }

  render() {
    return (
      <div className="Scales">
        <h2>
          Generate a Scale
        </h2>
        <Select
          name="key"
          options={KEYS}
          value={this.props.musicalKey}
          onChange={this.updateKey}
        />
        <Select
          name="scale"
          options={Object.keys(SCALES)}
          value={this.props.scale}
          onChange={this.updateScale}
        />
        -- or --
        <Select
          name="mode"
          options={Object.keys(MODES)}
          value={this.props.scale}
          onChange={this.updateScale}
        />
        <Scale notes={this.props.notes} />
      </div>
    );
  }
}

Scales.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scales);
