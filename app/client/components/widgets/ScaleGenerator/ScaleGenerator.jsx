import React from 'react';

import KEYS from '../../../constants/keys';
import { SCALES } from '../../../constants/scales';

import Select from '../../UI/forms/Select/Select';
import Scale from '../../UI/Scale/Scale';

class ScaleGenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      key: 'C',
      scale: 'major',
    };
  }

  update(field) {
    return (value) => {
      this.setState({ [field]: value });
    };
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
          value={this.state.key}
          onChange={this.update('key')}
        />
        <Select
          name="scale"
          options={SCALES}
          value={this.state.scale}
          onChange={this.update('scale')}
        />
        <Scale
          musicalKey={this.state.key}
          scale={this.state.scale}
        />
      </div>
    );
  }
}

export default ScaleGenerator;
