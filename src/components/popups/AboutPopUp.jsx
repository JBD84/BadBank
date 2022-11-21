import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">Danger Bad Bank</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>Why we say Danger Bad Bank?</h2>
                    <p>
                      Bad Bank is a project that consists of making a bank that is insecure due to lack of cybersecurity, but with the correct functionalities{" "}
                      
                      . I've tried to make it a little more fun.
                      <br /> <br />
                          So now you know this is a project with React and all the components to convince you to put your money but at your own risk because we are the most sincere and insecure bank you will find.
                      <br /> <br />
                      <div className="features">
                        <div>
                        Steps to follow:
                          <ul>
                            <li>Create Acount</li>
                            <li>Login</li>
                            <li>Deposit</li>
                            <li>WithDraw</li>
                            <li>See your balance</li>
                            <li>See your Data</li>
                            <li>Try Again</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Javier Bambaren D. <h6>MIT Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/JBD84/BadBank">
                        GitHub Repo
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    BYE
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
