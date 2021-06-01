import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * replication_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
     */
    readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration[];
}
export interface EcrReplicationConfigurationReplicationConfigurationRuleDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#region EcrReplicationConfiguration#region}.
     */
    readonly region: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#registry_id EcrReplicationConfiguration#registry_id}.
     */
    readonly registryId: string;
}
export interface EcrReplicationConfigurationReplicationConfigurationRule {
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#destination EcrReplicationConfiguration#destination}
     */
    readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
}
export interface EcrReplicationConfigurationReplicationConfiguration {
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#rule EcrReplicationConfiguration#rule}
     */
    readonly rule: EcrReplicationConfigurationReplicationConfigurationRule[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration}.
 */
export declare class EcrReplicationConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: EcrReplicationConfigurationConfig);
    get id(): string;
    get registryId(): string;
    private _replicationConfiguration?;
    get replicationConfiguration(): EcrReplicationConfigurationReplicationConfiguration[];
    set replicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration[]);
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): EcrReplicationConfigurationReplicationConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
