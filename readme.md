# OpenFn Viz 3D (openfn-viz-3js)

## Overview

Inspired by the **COVID-19 pandemic** and the need to address global challenges, **openfn-viz-3js** is a project that uses **Three.js** and **ThreeGlobe.js** to create interactive 3D visualizations. This platform helps visualize data and the efforts of volunteers and organizations working on major issues like **LGBTQ+ rights, healthcare, education**, and **environmental sustainability**.

![Project Screenshot](screenshot.png)

## Features

- **3D Visualizations**: Interactive globes and data visualizations built with **Three.js** and **ThreeGlobe.js**.
- **Real-Time Data Integration**: Visualizations are updated with data from various sources (e.g., DHIS2, Google BigQuery).
- **Global Impact Tracking**: Showcase the efforts of organizations and volunteers working globally on key issues like healthcare, LGBTQ+ empowerment, and more.
- **Customizable**: Adapt the platform to your project's needs by modifying views, data sources, and interactive elements.

## Installation

### Prerequisites

- **Node.js** (v12.x or above)
- **npm** (Node Package Manager)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/joshuamabina/openfn-viz-3js.git
   cd openfn-viz-3js
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build and run the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:8080`.

## Usage

Explore data visualizations in real-time. Modify the backend data sources and visualizations as needed.

## Customization

- **Data Integration**: Pull data from external systems (e.g., Google BigQuery, DHIS2).
- **Enhance Interaction**: Add features like clickable regions or tooltips.
- **Visual Design**: Customize 3D models and other visual elements.

## Dependencies

- **@babel/core**: JavaScript transpiler for browser compatibility.
- **three**: 3D rendering library.
- **three-globe**: Plugin for creating 3D globe visualizations.
- **webpack**: Bundler and development server.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

MIT License - see the [LICENSE](LICENSE) file for details. Credit [@janarosmonaliev](https://github.com/janarosmonaliev).
