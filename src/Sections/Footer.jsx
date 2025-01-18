

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 ">
            <div className="text-white-500 flex gap-2">
                <p>Terms and Condition</p><p>|</p><p>Privacy and Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </div>
                <div className="social-icon">
                    <img src="/assets/linkedIn.png" alt="linkedIn" className="w-1/2 h-1/2"/>
                </div>
            </div>
            <p>©2025 Teja.All rights reserved.</p>
        </section>
    )
}
export default Footer
