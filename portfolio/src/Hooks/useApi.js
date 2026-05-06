import { useState, useEffect, useCallback } from 'react';
import staticDataService from '../Services/api';

export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};

export const useProjects = (params = {}) => {
  return useApi(() => staticDataService.getProjects(params), [JSON.stringify(params)]);
};

export const useProject = (id) => {
  return useApi(() => staticDataService.getProject(id), [id]);
};

export const useSkills = (params = {}) => {
  return useApi(() => staticDataService.getSkills(params), [JSON.stringify(params)]);
};

export const useAbout = () => {
  return useApi(() => staticDataService.getAbout(), []);
};

export const useContact = () => {
  const submitContact = async (contactData) => {
    try {
      const result = await staticDataService.submitContact(contactData);
      return result;
    } catch (error) {
      throw error;
    }
  };

  return { submitContact };
};
