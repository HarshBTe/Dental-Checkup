const Checkup = require('../models/Checkup');



exports.requestCheckup = async (req, res) => {
    const { id: dentistId } = req.params;
    
    // Trim any leading/trailing whitespace or control characters (like \n, \r)
    const trimmedDentistId = dentistId.trim();
  
    try {
      const checkup = await Checkup.create({
        patient: req.user.id,  // Using the user ID from the JWT token (from the auth middleware)
        dentist: trimmedDentistId,  // Use the trimmed dentistId
        images: [],
        notes: []
      });
      res.status(201).json({ message: "Checkup requested", checkup });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error requesting checkup", error: err.message });
    }
  };
  

exports.uploadResult = async (req, res) => {
  const { id } = req.params;
  const { notes } = req.body;
  const imagePaths = req.files.map(f => f.path);

  const checkup = await Checkup.findById(id);
  if (!checkup) return res.status(404).json({ message: "Checkup not found" });

  checkup.images.push(...imagePaths);
  checkup.notes.push(...JSON.parse(notes));
  await checkup.save();

  res.json({ message: "Checkup result uploaded", checkup });
};

exports.getResults = async (req, res) => {
  const checkups = await Checkup.find({ patient: req.user.id }).populate('dentist', 'name');
  res.json(checkups);
};

exports.getRequestedCheckups = async (req, res) => {
  const checkups = await Checkup.find({ dentist: req.user.id }).populate('patient', 'name');
  res.json(checkups);
};
