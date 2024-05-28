import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 leading-7">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <div className="mb-8">
        <p className="dark:text-neutral-300 text-neutral-700">
          Welcome to Mac, a powerful and user-friendly computer designed for
          creativity, productivity, and entertainment. With its intuitive macOS
          operating system and sleek design, Mac empowers you to take on your
          everyday tasks and unleash your potential. **At Apple, we are
          committed to your privacy and security.** This document outlines how
          we handle your data when you use your Mac. We are dedicated to
          protecting your information and providing you with control over your
          privacy settings. At Mac, we are committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and protect your data when you
          use our platform.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Personal Information:
            </strong>{" "}
            When you use Mac, we may collect certain personal information such
            as your username. This information is used solely for the purpose of
            identifying users within the platform.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Mac Data Collection:
            </strong>{" "}
            We collect some data to help improve your Mac experience. This may
            include diagnostic data, usage statistics, and performance
            information. This data is anonymized and doesn't identify you
            personally. You can manage your privacy settings to control what
            data is collected.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Usage Data:</strong> We
            may collect usage data such as your IP address, browser type, and
            device information for analytics purposes. This information helps us
            improve the performance and usability of our platform.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How We Use Your Information:
        </h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">Mac Security:</strong>{" "}
            Your Mac is designed with security in mind. Features like sandboxing
            and encryption help protect your data from unauthorized access. We
            recommend keeping your software up to date for optimal security.{" "}
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Improving User Experience:
            </strong>{" "}
            We use usage data to analyze user behavior and preferences. This
            helps us enhance the functionality and user experience of Mac.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Communication:</strong> We
            may use your contact information to communicate with you regarding
            important updates, announcements, or changes to our Privacy Policy.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">Encryption:</strong> We
            use industry-standard encryption protocols to ensure the security of
            your data during transmission.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Secure Storage:</strong>{" "}
            Your personal information and confession data are stored securely on
            our servers. We implement strict access controls to prevent
            unauthorized access to your data.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Third-Party Services:
            </strong>{" "}
            We may use third-party services for analytics or communication
            purposes. These services adhere to strict privacy and security
            standards to protect your data.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Rights:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Access and Control:
            </strong>{" "}
            You have the right to access, modify, or delete your personal
            information at any time. You can update your profile or delete your
            account through the Mac platform.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Opt-Out:</strong> You have
            the option to opt-out of receiving promotional communications from
            us. You can manage your communication preferences in your account
            settings.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Changes to Privacy Policy:
        </h2>
        <p className="dark:text-neutral-300 text-neutral-700">
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be communicated to users through the Mac
          platform or via email. By continuing to use our platform after the
          changes take effect, you agree to the updated Privacy Policy.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-neutral-300 text-neutral-700">
          Contact Us:
        </h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or data
          practices, please contact us at{" "}
          <a href="mailto:contact@example.com" className="text-blue-500">
            aksshaybala8846@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
