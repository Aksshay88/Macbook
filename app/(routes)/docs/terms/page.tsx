import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-32 leading-7">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="dark:text-neutral-300 text-neutral-700">
            Welcome to Mac, a powerful and user-friendly computer designed for
            creativity, productivity, and entertainment. With its intuitive
            macOS operating system and sleek design, Mac empowers you to take on
            your everyday tasks and unleash your potential. By accessing or
            using Mac, you agree to comply with and be bound by the following
            Terms and Conditions. Please read these Terms and Conditions
            carefully before using the platform.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Use of Our Platform</h2>
          <p className="dark:text-neutral-300 text-neutral-700 mb-4">
            1.{" "}
            <strong className="dark:text-neutral-100">Access to Content</strong>
            : The content provided on Mac is for informational and entertainment
            purposes only. You may access and use the content for personal,
            non-commercial use.
          </p>
          <p className="dark:text-neutral-300 text-neutral-700 mb-4">
            2.{" "}
            <strong className="dark:text-neutral-100">
              Account Registration
            </strong>
            : In order to access certain features of Mac, you may be required to
            register for an account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account.
          </p>
          <p className="dark:text-neutral-300 text-neutral-700 mb-4">
            3.{" "}
            <strong className="dark:text-neutral-100">
              Prohibited Activities
            </strong>
            : You agree not to engage in any activity that may disrupt or
            interfere with the functioning of Mac or violate the rights of other
            users. Prohibited activities include but are not limited to
            spamming, hacking, or distributing malicious software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
