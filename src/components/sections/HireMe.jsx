import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "web-app",
    name: "Web Application",
    desc: "Full-stack web app development",
  },
  {
    id: "frontend",
    name: "Frontend Development",
    desc: "UI/UX implementation with React",
  },
  {
    id: "backend",
    name: "Backend / API",
    desc: "Server-side logic and database",
  },
  {
    id: "bug-fix",
    name: "Bug Fix / Maintenance",
    desc: "Debugging and code improvements",
  },
];

export const HireMe = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    deadline: "",
    budget: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        setStep(1);
        setSelectedService(null);
        setFormData({ name: "", email: "", description: "", deadline: "", budget: "" });
      }, 4000);
    }, 1200);
  };

  return (
    <section id="hire" className="hire">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Hire Me
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Book a service and let's build something great
      </motion.p>

      <motion.div
        className="hire-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Step Indicator */}
        <div className="step-indicator">
          {["Select Service", "Details & Offer"].map((label, i) => (
            <div
              key={label}
              className={`step ${step > i ? "completed" : ""} ${step === i + 1 ? "active" : ""}`}
            >
              <div className="step-number">{i + 1}</div>
              <span className="step-label">{label}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <motion.div
              key="step1"
              className="hire-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-grid">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    className={`service-card ${
                      selectedService === service.id ? "selected" : ""
                    }`}
                    onClick={() => setSelectedService(service.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h4>{service.name}</h4>
                    <p>{service.desc}</p>
                  </motion.button>
                ))}
              </div>

              <button
                className="submit-btn"
                onClick={handleNext}
                disabled={!selectedService}
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Project Details + Budget Bid */}
          {step === 2 && (
            <motion.div
              key="step2"
              className="hire-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <form className="hire-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="deadline"
                  placeholder="Expected Deadline (e.g. 2 weeks)"
                  value={formData.deadline}
                  onChange={handleChange}
                />
                <textarea
                  name="description"
                  placeholder="Describe your project requirements..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                <div className="budget-section">
                  <label className="budget-label">Your Budget Offer (NPR)</label>
                  <div className="amount-input-wrapper">
                    <span className="currency-label">Rs.</span>
                    <input
                      type="number"
                      name="budget"
                      placeholder="How much are you willing to offer?"
                      value={formData.budget}
                      onChange={handleChange}
                      min="1"
                      required
                      className="amount-input"
                    />
                  </div>
                </div>

                <div className="step-buttons">
                  <button type="button" className="btn-back" onClick={handleBack}>
                    Back
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.description ||
                      !formData.budget ||
                      status === "processing"
                    }
                  >
                    {status === "processing" ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </form>

              {status === "success" && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Request submitted successfully. I'll review your offer and get back to you shortly.
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
