
// https://hackernoon.com/abstracting-mongoose-crud-operations-into-a-shared-file-34374f847f4a
// Way to abstract CRUD routes and make them reuseable.


// WIP because CRUD methods aren't needed yet.

exports.get = (req, res, next, model) => {
  const query = model.findById(req.params.id).exec();
  query.then((resource) => {
    return res.json(resource);
  })
    .catch((err) => {
    // send the error to the error handler
      return res.status(500).send(err);
    });
};

exports.get_all = (req, res, next, model) => {
  model.find({}, (err, modelList) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(modelList);
  });
};


exports.create = (req, res, next, model) => {
  const obj = model.create(req.body);
  obj.then(resource => res.json(resource))
    .catch((err) => {
    // send the error to the error handler
      return res.status(500).send(err);
    });
};

exports.update = (req, res, next, model) => {
  const obj = model.findById(req.params.id);
  obj.then((resource) => {
    if (!resource) {
      return next(errors.RESOURCE_NOT_FOUND());
    }

    // loop over the object and update the properties
    Object.keys(req.body).forEach((prop) => {
      resource[prop] = req.body[prop];
    });

    // save
    return resource.save();
  })
    .then(resource => res.json(resource))
    .catch(err =>
    // send the error to the error handler
      next(err));
};

exports.delete = (req, res, next, model) => {
  const obj = model.findById(req.params.id);
  obj.then((resource) => {
    // resource not found, let's throw an error
    if (!resource) {
      return next(errors.RESOURCE_NOT_FOUND());
    }

    return resource.remove();
  })
    .then(() => res.json({ message: `Resource ${req.params.id} deleted` }))
    .catch(err =>
    // send the error to the error handler
      next(err));
};
