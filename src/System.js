import React from "react";
import "./materialize.css";
import "./System.css";

const System = () => {
  return (
    <div className="row">
      <div className="col s7 m3">
        <div className="card blue-grey darken-1 small">
          <div className="card-content white-text">
            <span className="card-title">System Information</span>
            <table>
              <tbody>
                <tr>
                  <td>ArchName</td>
                  <td>
                    <span id="archname"></span>
                  </td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>
                    <span id="features"></span>
                  </td>
                </tr>
                <tr>
                  <td>ModelName</td>
                  <td>
                    <span id="modelName"></span>
                  </td>
                </tr>
                <tr>
                  <td>Number of Processors</td>
                  <td>
                    <span id="numOfProcessor"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col s7 m3">
        <div className="card blue-grey darken-1 small">
          <div className="card-content white-text">
            <span className="card-title">Memory</span>
            <table>
              <tbody>
                <tr>
                  <td>Available capacity</td>
                  <td>
                    <span id="availableCapacity"></span>
                  </td>
                </tr>
                <tr>
                  <td>Capacity</td>
                  <td>
                    <span id="capacity"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col s7 m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Storage</span>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td><td>"/"</td><td>Capacity:</td>
                  <td>
                    <span id="capacity1"></span>
                  </td>
                </tr>
                <tr>
                  <td>Name:</td><td>"SYSTEM"</td><td>Capacity:</td>
                  <td>
                    <span id="capacity2"></span>
                  </td>
                </tr>
                <tr>
                  <td>Name:</td><td>"/usr"</td><td>Capacity:</td>
                  <td>
                    <span id="capacity3"></span>
                  </td>
                </tr>
                <tr>
                  <td>Name:</td><td>"/home"</td><td>Capacity:</td>
                  <td>
                    <span id="capacity4"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col s7 m3">
        <div className="card blue-grey darken-1 small">
          <div className="card-content white-text">
            <span className="card-title">Display</span>
            <table>
              <tbody>
                <tr>
                  <td>Height:</td>
                  <td>
                    <span id="height"></span>
                  </td>
                </tr>
                <tr>
                  <td>Width:</td>
                  <td>
                    <span id="width"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
