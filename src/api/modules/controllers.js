const testData= {"hello": true};

const controller= {
  createOne(model, body) {
    return Promise.resolve(testData);
  }

  updateOne(docToUpdate, update) {
    return Promise.resolve(testData);
  }

  deleteOne(docToDelete) {
    return Promise.resolve(testData);
  }

  getOne(docToGet) {
    return Promise.resolve(testData);
  }

  getAll(model) {
    return Promise.resolve(testData);
  }

  findByParam(model, id) {
    return Promise.resolve(testData);
  }
};

export const createOne= (model) => (req, res, next) => {
  return controller.createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
};

export const updateOne= (model) => (req, res, next) => {
  const {docFromId as docToUpdate, body}= req;
  
  return controller.updateOne(docToUpdate, body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
};

export const deleteOne= (model) => (req, res, next) => {
  const {docFromId as docToDelete}= req;

  return controller.deleteOne(docToDelete)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
}

export const getOne = (model) => (req, res, next) => {
  const {docFromId as docToGet} = req;

  return controllers.getOne(docToGet)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));
}

export const getAll = (model) => (req, res, next) => {
  return controllers.getAll(model)
    .then(docs => res.json(docs))
    .catch(error => next(error));
}

export const findByParam = (model) => (req, res, next, id) => {
   return controllers.findByParam(model, id)
    .then(doc => {
      // Check whether the document is available.
      if(!doc) {
        next(new Error('Not Found'));
      }
      else {
        req.docFromId= doc;
        next();
      }
    })
    .catch(error => next(error));
}

export const generateControllers= (model, overrides= {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  }

  return {...defaults, ...overrides}
}