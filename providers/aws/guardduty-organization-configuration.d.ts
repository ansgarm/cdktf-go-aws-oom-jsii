import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.
     */
    readonly autoEnable: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#detector_id GuarddutyOrganizationConfiguration#detector_id}.
     */
    readonly detectorId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}.
 */
export declare class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig);
    private _autoEnable;
    get autoEnable(): boolean;
    set autoEnable(value: boolean);
    get autoEnableInput(): boolean;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
