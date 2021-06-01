import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#delete_protection NetworkfirewallFirewall#delete_protection}.
     */
    readonly deleteProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#description NetworkfirewallFirewall#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}.
     */
    readonly firewallPolicyArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.
     */
    readonly firewallPolicyChangeProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#name NetworkfirewallFirewall#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.
     */
    readonly subnetChangeProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags NetworkfirewallFirewall#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags_all NetworkfirewallFirewall#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#vpc_id NetworkfirewallFirewall#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * subnet_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_mapping NetworkfirewallFirewall#subnet_mapping}
     */
    readonly subnetMapping: NetworkfirewallFirewallSubnetMapping[];
}
export declare class NetworkfirewallFirewallFirewallStatusSyncStatesAttachment extends cdktf.ComplexComputedList {
    get endpointId(): string;
    get subnetId(): string;
}
export declare class NetworkfirewallFirewallFirewallStatusSyncStates extends cdktf.ComplexComputedList {
    get attachment(): any;
    get availabilityZone(): string;
}
export declare class NetworkfirewallFirewallFirewallStatus extends cdktf.ComplexComputedList {
    get syncStates(): any;
}
export interface NetworkfirewallFirewallSubnetMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_id NetworkfirewallFirewall#subnet_id}.
     */
    readonly subnetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall}.
 */
export declare class NetworkfirewallFirewall extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig);
    get arn(): string;
    private _deleteProtection?;
    get deleteProtection(): boolean;
    set deleteProtection(value: boolean);
    resetDeleteProtection(): void;
    get deleteProtectionInput(): boolean | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _firewallPolicyArn;
    get firewallPolicyArn(): string;
    set firewallPolicyArn(value: string);
    get firewallPolicyArnInput(): string;
    private _firewallPolicyChangeProtection?;
    get firewallPolicyChangeProtection(): boolean;
    set firewallPolicyChangeProtection(value: boolean);
    resetFirewallPolicyChangeProtection(): void;
    get firewallPolicyChangeProtectionInput(): boolean | undefined;
    firewallStatus(index: string): NetworkfirewallFirewallFirewallStatus;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _subnetChangeProtection?;
    get subnetChangeProtection(): boolean;
    set subnetChangeProtection(value: boolean);
    resetSubnetChangeProtection(): void;
    get subnetChangeProtectionInput(): boolean | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get updateToken(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _subnetMapping;
    get subnetMapping(): NetworkfirewallFirewallSubnetMapping[];
    set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]);
    get subnetMappingInput(): NetworkfirewallFirewallSubnetMapping[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
