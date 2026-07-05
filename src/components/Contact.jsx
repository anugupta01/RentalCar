import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{ height: '700px' }}>
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div
              className="row"
              style={{ width: '500px', marginLeft: '500px', marginTop: '100px' }}
            >
              <div className="col-sm-8 col-sm-offset-2">
                <div>
                  <h2>CONTACT US</h2>
                </div>
                <form method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required
                      placeholder="Name*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="7"
                    />
                  </div>
                  <div>
                    <Link to="/">
                      <button type="submit" className="btn btn-lg btn-danger">
                        CONTACT US
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}