import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import KEYS from '../../../constants/keys';
import SCALES from '../../../constants/scales';

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

const { string, func } = PropTypes;
const propTypes = {
  musicalKey: string.isRequired,
  scale: string.isRequired,
  updateScale: func.isRequired,
};

class ScaleGenerator extends React.Component {
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
      <div className="ScaleGenerator">
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
        <Scale
          musicalKey={this.props.musicalKey}
          scale={this.props.scale}
        />
      </div>
    );
  }
}

ScaleGenerator.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScaleGenerator);
