async function Logout(req, res) {
    try {
        // Clear the cookie with options
        res.clearCookie("token", {
            httpOnly: true, 
            secure: true, // Ensure this is true only in production with HTTPS
            sameSite: 'None' // SameSite set to 'None' allows third-party usage
        });

        // Return a success response
        res.json({
            message: "Logout Successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        // Handle any errors
        res.json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = Logout;
