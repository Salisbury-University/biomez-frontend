import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';

//import { render } from 'react-dom';
import Highcharts from 'highcharts';
import VennModule from 'highcharts/modules/venn.js';
// Initialize the VennModule https://github.com/highcharts/highcharts-react#how-to-add-a-module
VennModule(Highcharts);

const apiResponse = [
  {
    sets: ['Bio'],
    value: 100,
  },
  {
    sets: ['Social'],
    value: 100,
  },
  {
    sets: ['Psychological'],
    value: 100,
  },
  {
    sets: ['Bio', 'Social'],
    value: 25,
    name: 'Bio Social',
  },
  {
    sets: ['Bio', 'Psychological'],
    value: 25,
    name: 'Bio Psych',
  },
  {
    sets: ['Social', 'Psychological'],
    value: 25,
    name: 'Social Psych',
  },
  {
    sets: ['Social', 'Psychological', 'Bio'],
    value: 10,
    name: 'All',
  },
];

export default class VennDiagram extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: apiResponse });
  }

  render() {
    let vennOptions = {
      title: {
        text: 'EXPLORE',
      },
      chart: {
          backgroundColor: '#E4FFFE',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 20,
        className: '',
        animation: true,
        height: 700,
        width: 1000,
        },
        circles: {
            borderWidth: 200
            },
      series: [
        {
          type: 'venn',
          name: 'Number_of_Documents',
          data: this.state.data,
        },
      ],
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={vennOptions} />
      </div>
    );
  }
}