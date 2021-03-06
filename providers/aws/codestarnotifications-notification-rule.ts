// https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#detail_type CodestarnotificationsNotificationRule#detail_type}
  */
  readonly detailType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
  */
  readonly eventTypeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#name CodestarnotificationsNotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#resource CodestarnotificationsNotificationRule#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#status CodestarnotificationsNotificationRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags CodestarnotificationsNotificationRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags_all CodestarnotificationsNotificationRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#target CodestarnotificationsNotificationRule#target}
  */
  readonly target?: CodestarnotificationsNotificationRuleTarget[];
}
export interface CodestarnotificationsNotificationRuleTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#address CodestarnotificationsNotificationRule#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#type CodestarnotificationsNotificationRule#type}
  */
  readonly type?: string;
}

function codestarnotificationsNotificationRuleTargetToTerraform(struct?: CodestarnotificationsNotificationRuleTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule}
*/
export class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodestarnotificationsNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarnotifications_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._detailType = config.detailType;
    this._eventTypeIds = config.eventTypeIds;
    this._name = config.name;
    this._resource = config.resource;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType: string;
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType
  }

  // event_type_ids - computed: false, optional: false, required: true
  private _eventTypeIds: string[];
  public get eventTypeIds() {
    return this.getListAttribute('event_type_ids');
  }
  public set eventTypeIds(value: string[]) {
    this._eventTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeIdsInput() {
    return this._eventTypeIds
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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

  // target - computed: false, optional: true, required: false
  private _target?: CodestarnotificationsNotificationRuleTarget[];
  public get target() {
    return this.interpolationForAttribute('target') as any;
  }
  public set target(value: CodestarnotificationsNotificationRuleTarget[] ) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail_type: cdktf.stringToTerraform(this._detailType),
      event_type_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypeIds),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.stringToTerraform(this._resource),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target: cdktf.listMapper(codestarnotificationsNotificationRuleTargetToTerraform)(this._target),
    };
  }
}
