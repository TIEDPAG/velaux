import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import Application from '../../pages/ApplicationList';
import Clusters from '../../pages/Cluster/index';
import Addons from '../../pages/Addons/index';
import ApplicationWorkflow from '../../pages/ApplicationWorkflow/index';
import ApplicationConfig from '../../pages/ApplicationConfig';
import NotFound from '../../pages/NotFound';
import ApplicationInstanceList from '../../pages/ApplicationInstanceList';
import ApplicationRevisionList from '../../pages/ApplicationRevisionList';
import DeliveryTargetList from '../../pages/DeliveryTargetList';
import ApplicationMonitor from '../../pages/ApplicationMonitor';
import ApplicationLayout from '../Application';

export default function Content() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/applications"></Redirect>;
        }}
      />
      <Route exact path="/applications" component={Application} />
      <Route
        exact
        path="/applications/:appName"
        render={(props: any) => {
          return <Redirect to={`/applications/${props.match.params.appName}/config`}></Redirect>;
        }}
      />
      <Route
        exact
        path="/applications/:appName/config"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationConfig {...props}></ApplicationConfig>
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/workflows"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationWorkflow {...props}></ApplicationWorkflow>
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/revisions"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationRevisionList {...props}></ApplicationRevisionList>
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName"
        render={(props: any) => {
          return (
            <Redirect
              to={`/applications/${props.match.params.appName}/envbinding/${props.match.params.envName}/instances`}
            ></Redirect>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/instances"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationInstanceList {...props}></ApplicationInstanceList>
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/monitor"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationMonitor {...props}></ApplicationMonitor>
            </ApplicationLayout>
          );
        }}
      />
      <Route path="/deliveryTargets" component={DeliveryTargetList} />
      <Route path="/clusters" component={Clusters} />
      <Route path="/addons" component={Addons} />
      <Route path="/notFound" component={NotFound} />
      <Redirect to="/notFound" />
    </Switch>
  );
}