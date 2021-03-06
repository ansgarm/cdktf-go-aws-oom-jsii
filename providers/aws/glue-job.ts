// https://www.terraform.io/docs/providers/aws/r/glue_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#connections GlueJob#connections}
  */
  readonly connections?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#default_arguments GlueJob#default_arguments}
  */
  readonly defaultArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#description GlueJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#glue_version GlueJob#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_capacity GlueJob#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_retries GlueJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#non_overridable_arguments GlueJob#non_overridable_arguments}
  */
  readonly nonOverridableArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#number_of_workers GlueJob#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#role_arn GlueJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#security_configuration GlueJob#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags GlueJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags_all GlueJob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#timeout GlueJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#worker_type GlueJob#worker_type}
  */
  readonly workerType?: string;
  /**
  * command block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#command GlueJob#command}
  */
  readonly command: GlueJobCommand[];
  /**
  * execution_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#execution_property GlueJob#execution_property}
  */
  readonly executionProperty?: GlueJobExecutionProperty[];
  /**
  * notification_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notification_property GlueJob#notification_property}
  */
  readonly notificationProperty?: GlueJobNotificationProperty[];
}
export interface GlueJobCommand {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#python_version GlueJob#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#script_location GlueJob#script_location}
  */
  readonly scriptLocation: string;
}

function glueJobCommandToTerraform(struct?: GlueJobCommand): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    script_location: cdktf.stringToTerraform(struct!.scriptLocation),
  }
}

export interface GlueJobExecutionProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_concurrent_runs GlueJob#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
}

function glueJobExecutionPropertyToTerraform(struct?: GlueJobExecutionProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
  }
}

export interface GlueJobNotificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notify_delay_after GlueJob#notify_delay_after}
  */
  readonly notifyDelayAfter?: number;
}

function glueJobNotificationPropertyToTerraform(struct?: GlueJobNotificationProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}
*/
export class GlueJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueJobConfig
  */
  public constructor(scope: Construct, id: string, config: GlueJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_job',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connections = config.connections;
    this._defaultArguments = config.defaultArguments;
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._nonOverridableArguments = config.nonOverridableArguments;
    this._numberOfWorkers = config.numberOfWorkers;
    this._roleArn = config.roleArn;
    this._securityConfiguration = config.securityConfiguration;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._command = config.command;
    this._executionProperty = config.executionProperty;
    this._notificationProperty = config.notificationProperty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[];
  public get connections() {
    return this.getListAttribute('connections');
  }
  public set connections(value: string[] ) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections
  }

  // default_arguments - computed: false, optional: true, required: false
  private _defaultArguments?: { [key: string]: string };
  public get defaultArguments() {
    return this.interpolationForAttribute('default_arguments') as any;
  }
  public set defaultArguments(value: { [key: string]: string } ) {
    this._defaultArguments = value;
  }
  public resetDefaultArguments() {
    this._defaultArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArgumentsInput() {
    return this._defaultArguments
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string;
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string) {
    this._glueVersion = value;
  }
  public resetGlueVersion() {
    this._glueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueVersionInput() {
    return this._glueVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number ) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // non_overridable_arguments - computed: false, optional: true, required: false
  private _nonOverridableArguments?: { [key: string]: string };
  public get nonOverridableArguments() {
    return this.interpolationForAttribute('non_overridable_arguments') as any;
  }
  public set nonOverridableArguments(value: { [key: string]: string } ) {
    this._nonOverridableArguments = value;
  }
  public resetNonOverridableArguments() {
    this._nonOverridableArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonOverridableArgumentsInput() {
    return this._nonOverridableArguments
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number ) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string ) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string ) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType
  }

  // command - computed: false, optional: false, required: true
  private _command: GlueJobCommand[];
  public get command() {
    return this.interpolationForAttribute('command') as any;
  }
  public set command(value: GlueJobCommand[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }

  // execution_property - computed: false, optional: true, required: false
  private _executionProperty?: GlueJobExecutionProperty[];
  public get executionProperty() {
    return this.interpolationForAttribute('execution_property') as any;
  }
  public set executionProperty(value: GlueJobExecutionProperty[] ) {
    this._executionProperty = value;
  }
  public resetExecutionProperty() {
    this._executionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionPropertyInput() {
    return this._executionProperty
  }

  // notification_property - computed: false, optional: true, required: false
  private _notificationProperty?: GlueJobNotificationProperty[];
  public get notificationProperty() {
    return this.interpolationForAttribute('notification_property') as any;
  }
  public set notificationProperty(value: GlueJobNotificationProperty[] ) {
    this._notificationProperty = value;
  }
  public resetNotificationProperty() {
    this._notificationProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPropertyInput() {
    return this._notificationProperty
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connections: cdktf.listMapper(cdktf.stringToTerraform)(this._connections),
      default_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultArguments),
      description: cdktf.stringToTerraform(this._description),
      glue_version: cdktf.stringToTerraform(this._glueVersion),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      name: cdktf.stringToTerraform(this._name),
      non_overridable_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._nonOverridableArguments),
      number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      worker_type: cdktf.stringToTerraform(this._workerType),
      command: cdktf.listMapper(glueJobCommandToTerraform)(this._command),
      execution_property: cdktf.listMapper(glueJobExecutionPropertyToTerraform)(this._executionProperty),
      notification_property: cdktf.listMapper(glueJobNotificationPropertyToTerraform)(this._notificationProperty),
    };
  }
}
