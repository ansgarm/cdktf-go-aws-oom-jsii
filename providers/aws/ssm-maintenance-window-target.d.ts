import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#description SsmMaintenanceWindowTarget#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#name SsmMaintenanceWindowTarget#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#owner_information SsmMaintenanceWindowTarget#owner_information}.
     */
    readonly ownerInformation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#resource_type SsmMaintenanceWindowTarget#resource_type}.
     */
    readonly resourceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#window_id SsmMaintenanceWindowTarget#window_id}.
     */
    readonly windowId: string;
    /**
     * targets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#targets SsmMaintenanceWindowTarget#targets}
     */
    readonly targets: SsmMaintenanceWindowTargetTargets[];
}
export interface SsmMaintenanceWindowTargetTargets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#key SsmMaintenanceWindowTarget#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#values SsmMaintenanceWindowTarget#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target}.
 */
export declare class SsmMaintenanceWindowTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _ownerInformation?;
    get ownerInformation(): string;
    set ownerInformation(value: string);
    resetOwnerInformation(): void;
    get ownerInformationInput(): string | undefined;
    private _resourceType;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string;
    private _windowId;
    get windowId(): string;
    set windowId(value: string);
    get windowIdInput(): string;
    private _targets;
    get targets(): SsmMaintenanceWindowTargetTargets[];
    set targets(value: SsmMaintenanceWindowTargetTargets[]);
    get targetsInput(): SsmMaintenanceWindowTargetTargets[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
