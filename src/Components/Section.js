const Section = () => {
    return (
        <>
            <div className="container-fluid bg-dark cont3">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }} className="row">
                    <div className="col-sm-12 col-lg-12 d-flex align-items-center flex-column">
                        <h1 className="text-light" >Goal Based Planning</h1>
                        <p className="text-light">Plan your finances using goal based planning</p>
                        <img src="https://beta.goalfi.app/home/goal-based-planning/Illustration.png" className="img2" />
                    </div>

                </div>
                <div className="row d-flex align-items-center" style={{ marginTop: "50px", marginBottom: "50px" }}>
                    <div className="col-sm-12 col-lg-6">
                        <img src="https://beta.goalfi.app/3.%20Goal%20based%20planning/3.2%20investment.png" className="img1" />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h1>Automated KYC
                            and Onboarding
                            via Documents!</h1>
                    </div>
                </div>


            </div>
            <div className="container-fluid cont2">
                <div className="row d-flex align-items-center" style={{ marginTop: "50px", marginBottom: "50px" }}>
                    <div className="col-sm-12 col-lg-6">
                        <h1 className="text-dark">Empowering you with GoalFI financial planning and knowledge base APIs</h1>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <img src="https://beta.goalfi.app/4.%20Empower%20you/empower.png" className="img1" />
                    </div>
                </div>
            </div>
          


        </>
    )
}
export default Section