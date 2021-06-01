import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}.
     */
    readonly firewallArn: string;
    /**
     * logging_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
     */
    readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}.
     */
    readonly logDestination: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}.
     */
    readonly logDestinationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}.
     */
    readonly logType: string;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
     * log_destination_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
     */
    readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}.
 */
export declare class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig);
    private _firewallArn;
    get firewallArn(): string;
    set firewallArn(value: string);
    get firewallArnInput(): string;
    get id(): string;
    private _loggingConfiguration;
    get loggingConfiguration(): NetworkfirewallLoggingConfigurationLoggingConfiguration[];
    set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration[]);
    get loggingConfigurationInput(): NetworkfirewallLoggingConfigurationLoggingConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
